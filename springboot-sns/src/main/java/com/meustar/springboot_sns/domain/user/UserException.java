package com.meustar.springboot_sns.domain.user;

/**
 * User 예외 (Exception)
 * 사용자 관련 로직 처리 중 발생하는 예외를 정의한 클래스입니다.
 * RuntimeException을 상속받아 실행 중에 발생하는 예외로 처리합니다.
 */
public class UserException extends RuntimeException {
    
    /**
     * 예외 메시지를 받아 부모 클래스(RuntimeException)에게 전달하는 생성자입니다.
     * 예: "이미 존재하는 사용자입니다" 같은 메시지를 담습니다.
     */
    public UserException(String message) {
        super(message);
    }
}
