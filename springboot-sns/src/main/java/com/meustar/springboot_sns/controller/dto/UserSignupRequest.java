package com.meustar.springboot_sns.controller.dto;

import com.meustar.springboot_sns.domain.user.User;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * 회원가입 요청 DTO (Data Transfer Object)
 * 클라이언트가 보내는 회원가입 데이터(username, password)를 담는 객체입니다.
 * Java 14+의 record 기능을 사용하여 불변 데이터를 간편하게 정의합니다.
 */
public record UserSignupRequest(String username, String password) {
    
    /**
     * DTO를 User 엔티티로 변환하는 메서드입니다.
     * 이 때 비밀번호는 암호화하여 저장해야 하므로 PasswordEncoder를 전달받습니다.
     */
    public User toEntity(PasswordEncoder passwordEncoder) {
        return User.builder()
                .username(username)
                .password(passwordEncoder.encode(password)) // 비밀번호 암호화
                .build();
    }
}
