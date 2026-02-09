package com.meustar.springboot_sns.controller;

import com.meustar.springboot_sns.controller.dto.UserResponse;
import com.meustar.springboot_sns.controller.dto.UserSignupRequest;
import com.meustar.springboot_sns.domain.user.User;
import com.meustar.springboot_sns.domain.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * User 컨트롤러 (Controller)
 * 사용자 관련 API 요청(HTTP)을 받아서 처리하는 클래스입니다.
 * 웹 브라우저나 앱 같은 클라이언트와 서버 간의 창구 역할을 합니다.
 */
@RestController // 이 클래스가 REST API 컨트롤러임을 나타냅니다. (JSON 응답 반환)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService; // 비즈니스 로직을 처리할 서비스

    /**
     * 회원가입 API
     * HTTP POST 요청으로 /api/v1/users/signup 경로로 들어오는 요청을 처리합니다.
     * 
     * @param request 회원가입 요청 데이터 (JSON Body -> Java Object 변환)
     * @return 가입된 사용자 정보와 200 OK 상태 코드
     */
    @PostMapping("/api/v1/users/signup")
    public ResponseEntity<UserResponse> signup(@RequestBody UserSignupRequest request) {
        // 서비스에게 회원가입 처리를 맡깁니다.
        User user = userService.signup(request);
        
        // 처리 결과를 응답용 DTO로 변환하여 200 OK와 함께 반환합니다.
        return ResponseEntity.ok(UserResponse.from(user));
    }
}
