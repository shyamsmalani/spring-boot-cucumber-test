package com.shyammalani.cucumber.integration;

import com.shyammalani.cucumber.Application;
import org.springframework.boot.test.SpringApplicationContextLoader;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.test.context.ContextConfiguration;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@ContextConfiguration(classes = Application.class, loader = SpringApplicationContextLoader.class)
@WebIntegrationTest
public @interface CucumberStepsDefinition {
}
