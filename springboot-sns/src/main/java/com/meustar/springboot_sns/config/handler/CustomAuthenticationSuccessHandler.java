package com.meustar.springboot_sns.config.handler;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

/**
 * 로그인 성공 핸들러
 * 사용자가 아이디/비밀번호를 맞게 입력해서 로그인이 성공했을 때 실행되는 클래스입니다.
 */
@Component // 스프링 빈으로 등록하여 SecurityConfig에서 사용할 수 있게 합니다.
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    /**
     * 로그인 성공 시 호출되는 메서드
     * 보통 웹페이지라면 메인 페이지로 이동(Redirect)시키지만, API 서버이므로 상태 코드 200만 반환합니다.
     */
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        // HTTP 상태 코드를 200 (OK)로 설정
        response.setStatus(HttpServletResponse.SC_OK);
    }
}
