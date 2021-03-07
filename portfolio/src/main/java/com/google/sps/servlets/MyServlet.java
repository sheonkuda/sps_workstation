package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/one-thing-about-me")
public class MyServlet extends HttpServlet{
    private String factAboutMe = "I AM A BLESSED";

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        response.setContentType("text/html;");
        response.getWriter().println("<h1>" + factAboutMe + "</h1>");
    }
}