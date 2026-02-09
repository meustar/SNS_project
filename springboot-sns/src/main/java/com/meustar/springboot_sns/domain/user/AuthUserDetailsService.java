package com.meustar.springboot_sns.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

/**
 * 인증 사용자 상세 서비스 (UserDetailsService 구현체)
 * 스프링 시큐리티가 로그인 처리를 할 때, "DB에 있는 유저 정보를 가져오는 방법"을 정의하는 클래스입니다.
 */
@Service
@RequiredArgsConstructor
public class AuthUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    /**
     * username을 받아서 DB에서 유저 정보를 조회하여 스프링 시큐리티가 이해할 수 있는 UserDetails 객체로 반환합니다.
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // DB에서 username으로 사용자 조회, 없으면 예외 발생
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));

        // 조회된 정보를 바탕으로 스프링 시큐리티의 User 객체(UserDetails 구현체)를 생성하여 반환
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUsername())
                .password(user.getPassword()) // 암호화된 비밀번호
                .authorities(Collections.emptyList()) // 권한 목록 (현재는 권한 기능 미사용으로 빈 리스트)
                .build();
    }
}
