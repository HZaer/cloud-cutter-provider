package com.cut.cloud;

import com.cut.cloud.controller.CutCloudController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.cut")
public class CloudApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(CloudApplication.class, args);
    }
}
