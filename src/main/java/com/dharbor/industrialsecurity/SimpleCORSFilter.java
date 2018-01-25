package com.dharbor.industrialsecurity;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component
public class SimpleCORSFilter implements Filter{

    private static final Logger LOGGER = LoggerFactory.getLogger(SimpleCORSFilter.class);
    private static final List<String> ALLOWED_ORIGINS = Arrays.asList("http://localhost:4200");

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        LOGGER.info("Initializing Corsfilter");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest requestToUse = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String incomingOriginFromRequest = requestToUse.getHeader("Origin");
        if(ALLOWED_ORIGINS.contains(incomingOriginFromRequest))
            response.setHeader("Access-Control-Allow-Origin", incomingOriginFromRequest);
        filterChain.doFilter(requestToUse, response);
    }

    @Override
    public void destroy() {

    }
}
