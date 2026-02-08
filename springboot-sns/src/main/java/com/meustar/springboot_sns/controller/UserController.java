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

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/api/v1/users/signup")
    public ResponseEntity<UserResponse> signup(@RequestBody UserSignupRequest request) {
        User user = userService.signup(request);
        return ResponseEntity.ok(UserResponse.from(user));
    }
}
