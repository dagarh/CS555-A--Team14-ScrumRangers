package com.cs555.app.communityexploration;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cs555.app.communityexploration.contract.response.base.ErrorDTO;
import com.cs555.app.communityexploration.entity.Video;
import com.cs555.app.communityexploration.enumeration.ErrorResponseEnum;
import com.cs555.app.communityexploration.repository.VideoRepository;
import com.cs555.app.communityexploration.service.CommunityExplorationService;

@SpringBootTest
class CommunityExplorationApplicationTests {

    @Autowired
    private CommunityExplorationService service;

    @MockBean
    private VideoRepository videoRepository;

    @Test
    public void findAllVideosTest() {

        /*
         * I have mocked the repository layer using the Mockito library so that we don't rely on the
         * real time data in the DB
         */
        when(videoRepository.findAllVideos()).thenReturn(
                Stream.of(new Video(1, 123, "New York", "Parallel Park Experience", "https://www.youtube.com/shorts/kzMwsiaWHcg", 10),
                          new Video(2, 124, "Hoboken", "Ann's Italian Festival", "https://www.youtube.com/shorts/CjsKlxPr9vE", 100),
                          new Video(3, 125, "Hoboken", "HOBOKEN vs JERSEY CITY", "https://www.youtube.com/shorts/USgQOei2PIg", 200))
                .collect(Collectors.toList()));

        // Passing locName as null to the service. It should return all the videos in this case
        assertEquals(3, service.fetchVideos(null, new ArrayList<>()).getVideos().size());

        // Passing locName as empty string to the service. It should return all the videos in this case also
        assertEquals(3, service.fetchVideos("", new ArrayList<>()).getVideos().size());
    }

    @Test
    public void findVideosByLocationTest() {

        /*
         * I have mocked the repository layer using the Mockito library so that we don't
         * rely on the real time data in the DB
         */
        String location = "Hoboken";
        when(videoRepository.findByLocation(location)).thenReturn(Stream.of(
                new Video(2, 124, "Hoboken", "Ann's Italian Festival", "https://www.youtube.com/shorts/CjsKlxPr9vE", 100),
                new Video(3, 125, "Hoboken", "HOBOKEN vs JERSEY CITY", "https://www.youtube.com/shorts/USgQOei2PIg", 200))
                .collect(Collectors.toList()));

        // Passing locName as "Hoboken" to the service. It must return corresponding videos in this case
        assertEquals(2, service.fetchVideos("Hoboken", new ArrayList<>()).getVideos().size());

        // Passing locName as "New York" to the service. It must return corresponding videos in this case
        assertEquals(0, service.fetchVideos("New York", new ArrayList<>()).getVideos().size());

        // Passing locName as "Jersey City" to the service. It must return corresponding videos in this case
        assertEquals(0, service.fetchVideos("Jersey City", new ArrayList<>()).getVideos().size());
    }

    @Test
    public void repositoryErrorTest() {
        // Mock a repository error
        when(videoRepository.findAllVideos()).thenThrow(new RuntimeException("Database Issue Found"));

        List<ErrorDTO> errorList = new ArrayList<>();

        // Service should catch the error and must return the empty list in this scenario
        assertEquals(0, service.fetchVideos(null, errorList).getVideos().size());

        // We also have to check for "DATABASE_ISSUE_FOUND" enum inside errorList since
        // database was not working properly
        boolean containsDatabaseIssue = errorList.stream()
            .anyMatch(error -> ErrorResponseEnum.DATABASE_ISSUE_FOUND.getErrorCode().equals(error.getErrorCode()));

        assertTrue(containsDatabaseIssue);

    }

}
