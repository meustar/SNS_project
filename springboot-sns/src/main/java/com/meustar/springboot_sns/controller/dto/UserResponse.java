package com.meustar.springboot_sns.controller.dto;

import com.meustar.springboot_sns.domain.user.User;

/**
 * 사용자 응답 DTO
 * 클라이언트에게 사용자 정보를 돌려줄 때 사용하는 객체입니다.
 * 보안상 중요한 정보(비밀번호 등)는 제외하고 필요한 정보만 담습니다.
 */
public record UserResponse(Long id, String username) {
    
    /**
     * User 엔티티를 받아서 UserResponse DTO로 변환하는 정적 팩토리 메서드입니다.
     */
    public static UserResponse from(User user) {
        return new UserResponse(user.getId(), user.getUsername());
    }
}
