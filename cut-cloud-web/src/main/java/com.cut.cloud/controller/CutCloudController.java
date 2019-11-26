package com.cut.cloud.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CutCloudController
{
    @RequestMapping("/cut")
    public String cutCloud()
    {
        return "a";
    }

}
