package com.meustar.springboot_sns.config;

import com.meustar.springboot_sns.config.handler.CustomAuthenticationFailureHandler;
import com.meustar.springboot_sns.config.handler.CustomAuthenticationSuccessHandler;
import com.meustar.springboot_sns.config.handler.CustomLogoutSuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

/**
 * 스프링 시큐리티 설정 (Security Config)
 * 애플리케이션의 보안 규칙을 정의하는 핵심 설정 파일입니다.
 * 로그인 방법, 접근 권한 등을 여기서 설정합니다.
 */
@Configuration // 설정 파일임을 나타냄
@EnableWebSecurity // 웹 보안 기능을 활성화함
@RequiredArgsConstructor
public class SecurityConfig {

    private final CustomAuthenticationSuccessHandler successHandler; // 로그인 성공 시 처리할 핸들러
    private final CustomAuthenticationFailureHandler failureHandler; // 로그인 실패 시 처리할 핸들러
    private final CustomLogoutSuccessHandler logoutSuccessHandler; // 로그아웃 성공 시 처리할 핸들러

    /**
     * 인증 관리자(AuthenticationManager) 빈 등록
     * 로그인 요청이 들어오면 ID/PW가 맞는지 검사하는 총괄 관리자입니다.
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    /**
     * 보안 필터 체인 (Security Filter Chain) 설정
     * 요청이 들어올 때 거쳐가야 할 보안 관문들을 정의합니다.
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // CSRF 보호 비활성화 (REST API에서는 보통 사용하지 않음)
                .csrf(AbstractHttpConfigurer::disable)
                
                // 요청 URL별 권한 설정
                .authorizeHttpRequests(auth -> auth
                        // 회원가입, 로그인 페이지는 누구나 접근 가능해야 함
                        .requestMatchers("/api/v1/users/signup", "/api/v1/login").permitAll()
                        // H2 콘솔(개발용 DB 화면)도 접근 허용
                        .requestMatchers("/h2-console/**").permitAll()
                        // 그 외 모든 요청은 로그인한 사용자만 접근 가능
                        .anyRequest().authenticated()
                )
                
                // 폼 로그인 설정 (Form Login)
                .formLogin(form -> form
                        // 로그인 요청을 처리할 URL (POST /api/v1/login)
                        .loginProcessingUrl("/api/v1/login")
                        // 로그인 폼에서 아이디 파라미터 이름
                        .usernameParameter("username")
                        // 로그인 폼에서 비밀번호 파라미터 이름
                        .passwordParameter("password")
                        // 로그인 성공/실패 시 동작할 핸들러 연결
                        .successHandler(successHandler)
                        .failureHandler(failureHandler)
                        // 로그인 관련 경로는 누구나 접근 가능
                        .permitAll()
                )

                // 로그아웃 설정
                .logout(logout -> logout
                        // 로그아웃 요청 URL (POST /api/v1/users/logout)
                        .logoutUrl("/api/v1/users/logout")
                        // 로그아웃 성공 시 핸들러
                        .logoutSuccessHandler(logoutSuccessHandler)
                        // 로그아웃 시 쿠키 삭제 (JSESSIONID)
                        .deleteCookies("JSESSIONID")
                        .permitAll()
                )
                
                // H2 콘솔 사용을 위한 프레임 옵션 해제
                .headers(headers -> headers.frameOptions(frameOptions -> frameOptions.disable()));

        return http.build();
    }
}
