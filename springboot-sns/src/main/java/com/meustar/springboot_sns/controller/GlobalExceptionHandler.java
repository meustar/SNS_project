package com.meustar.springboot_sns.controller;

import com.meustar.springboot_sns.domain.user.UserException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserException.class)
    public ResponseEntity<String> handleUserException(UserException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
