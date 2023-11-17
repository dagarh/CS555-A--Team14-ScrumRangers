package com.cs555.app.communityexploration.config;

import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

/**
 * @author Himanshu Dagar
 *
 */
//@Configuration
//@EnableSwagger2
public class SwaggerConfig {

	@Bean
	public Docket swaggerConfiguration() {

		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.cs555.app.communityexploration"))
				.paths(PathSelectors.any()).build().apiInfo(metaData());
	}

	private ApiInfo metaData() {
		return new ApiInfoBuilder()
				.title("CS555-Server")
				.description("Community Exploration Project APIs")
				.version("1.0")
				.termsOfServiceUrl("Free to use")
				.license("API License")
				.contact(new Contact("Himanshu Dagar", "https://www.himanshudagar.com", "hdagar@stevens.edu"))
				.build();
	}
}

