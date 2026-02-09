package com.meustar.springboot_sns.controller;

import com.meustar.springboot_sns.domain.user.UserException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 전역 예외 처리기 (Global Exception Handler)
 * 애플리케이션 전역에서 발생하는 예외를 잡아서 공통된 형식으로 응답해주는 클래스입니다.
 * 컨트롤러에서 try-catch를 매번 쓰지 않아도 됩니다.
 */
@RestControllerAdvice // 모든 컨트롤러에서 발생하는 예외를 감지합니다.
public class GlobalExceptionHandler {

    /**
     * UserException이 발생했을 때 처리하는 메서드입니다.
     * 예: 중복된 아이디로 가입 시도 시
     */
    @ExceptionHandler(UserException.class)
    public ResponseEntity<String> handleUserException(UserException e) {
        // HTTP 상태 코드 400 (Bad Request)와 함께 에러 메시지를 반환합니다.
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
