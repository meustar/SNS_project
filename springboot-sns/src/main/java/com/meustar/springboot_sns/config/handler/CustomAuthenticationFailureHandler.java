package com.meustar.springboot_sns.config.handler;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

/**
 * 로그인 실패 핸들러
 * 아이디가 없거나 비밀번호가 틀려서 로그인이 실패했을 때 실행되는 클래스입니다.
 */
@Component // 스프링 빈으로 등록
public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {

    /**
     * 로그인 실패 시 호출되는 메서드
     * 에러 페이지로 이동하지 않고, "권한 없음"을 뜻하는 401 코드를 반환합니다.
     */
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException {
        // HTTP 상태 코드를 401 (Unauthorized)로 설정
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    }
}
