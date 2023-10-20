package com.cs555.app.communityexploration;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cs555.app.communityexploration.repository.VideoRepository;
import com.cs555.app.communityexploration.service.CommunityExplorationService;

@SpringBootTest
class CommunityExplorationApplicationTests {

	@Autowired
	private CommunityExplorationService service;
	
	@MockBean
	private VideoRepository videoRepository;
	
	@Test
	void contextLoads() {
		
	}

}
