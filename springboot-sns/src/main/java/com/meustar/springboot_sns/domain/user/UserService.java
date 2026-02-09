package com.meustar.springboot_sns.domain.user;

import com.meustar.springboot_sns.controller.dto.UserSignupRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * User 서비스 (Service)
 * 사용자 관련 비즈니스 로직(회원가입 등)을 처리하는 클래스입니다.
 */
@Service // 이 클래스가 서비스 계층의 빈(Bean)임을 스프링에게 알립니다.
@RequiredArgsConstructor // final이 붙은 필드에 대한 생성자를 자동으로 만들어줍니다. (의존성 주입 용도)
public class UserService {

    private final UserRepository userRepository; // DB 접근을 위한 리포지토리
    private final PasswordEncoder passwordEncoder; // 비밀번호 암호화를 위한 인코더

    /**
     * 회원가입을 처리하는 메서드입니다.
     * 1. 같은 이름의 사용자가 있는지 확인하고, 있다면 에러를 발생시킵니다.
     * 2. 없다면 비밀번호를 암호화하여 DB에 저장합니다.
     */
    public User signup(UserSignupRequest request) {
        // 이미 존재하는 username인지 확인 (중복 가입 방지)
        userRepository.findByUsername(request.username())
                .ifPresent(user -> {
                    // 값이 존재하면(ifPresent) 예외를 던집니다.
                    throw new UserException("Username already exists");
                });

        // DTO를 엔티티로 변환하면서 비밀번호를 암호화하고, 리포지토리를 통해 저장합니다.
        return userRepository.save(request.toEntity(passwordEncoder));
    }
}
