package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.ArrayList;
import com.google.gson.Gson;

@WebServlet("/one-thing-about-me")
public class MyServlet extends HttpServlet{
    private List<String> facts;

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        facts = new ArrayList<>();
        facts.add("I Am Blessed");
        facts.add("I love SPS");
        facts.add("I am a WINNER");

        Gson gson = new Gson();
        String json = gson.toJson(facts);
        //System.out.print(json);
        response.setContentType("application/json;");
        response.getWriter().println(json);
    }
}