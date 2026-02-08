package com.meustar.springboot_sns.domain.user;

import com.meustar.springboot_sns.controller.dto.UserSignupRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User signup(UserSignupRequest request) {
        userRepository.findByUsername(request.username())
                .ifPresent(user -> {
                    throw new UserException("Username already exists");
                });

        return userRepository.save(request.toEntity(passwordEncoder));
    }
}
