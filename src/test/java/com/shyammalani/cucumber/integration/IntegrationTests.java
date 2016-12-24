package com.shyammalani.cucumber.integration;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format = {"html:target/cucumber-html-report" },
        features = "src/test/resources/com/shyammalani/cucumber/integration",
        glue = { "com.shyammalani.cucumber.integration" },
        strict = true,
        dryRun = true)
public class IntegrationTests {

}
