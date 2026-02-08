package com.meustar.springboot_sns.controller.dto;

import com.meustar.springboot_sns.domain.user.User;
import org.springframework.security.crypto.password.PasswordEncoder;

public record UserSignupRequest(String username, String password) {
    public User toEntity(PasswordEncoder passwordEncoder) {
        return User.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .build();
    }
}
