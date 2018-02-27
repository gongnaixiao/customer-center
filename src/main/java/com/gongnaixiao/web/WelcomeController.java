package com.gongnaixiao.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class WelcomeController {
    @RequestMapping("/test")
    public String welcome(Map<String, Object> model) {
        model.put("message", "hello world");
        return "welcome";
    }
}