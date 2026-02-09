package com.meustar.springboot_sns.config;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * 비밀번호 인코더 설정 (Password Encoder Config)
 * 사용자 비밀번호를 안전하게 암호화하기 위한 설정을 담당합니다.
 * Argon2라는 강력한 해시 알고리즘을 사용합니다.
 */
@Configuration // 스프링 설정 클래스임을 나타냅니다.
public class PasswordEncoderConfig {

    /**
     * PasswordEncoder 빈을 등록합니다.
     * 스프링 시큐리티나 서비스에서 주입받아 비밀번호 암호화/검증에 사용합니다.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new Argon2PasswordEncoder();
    }

    /**
     * Argon2 알고리즘을 사용하는 PasswordEncoder 구현체입니다.
     * 내부 클래스로 정의하여 사용합니다.
     */
    private static class Argon2PasswordEncoder implements PasswordEncoder {

        // Argon2 객체 생성
        private final Argon2 argon2 = Argon2Factory.create();

        /**
         * 비밀번호를 암호화(해싱)하는 메서드입니다.
         * 회원가입 시 사용됩니다.
         */
        @Override
        public String encode(CharSequence rawPassword) {
            // hash(iterations, memory, parallelism, password)
            // 반복 횟수 10, 메모리 65536KB, 병렬 스레드 1개 사용
            return argon2.hash(10, 65536, 1, rawPassword.toString().toCharArray());
        }

        /**
         * 입력받은 비밀번호와 암호화된 비밀번호가 일치하는지 확인하는 메서드입니다.
         * 로그인 시 사용됩니다.
         */
        @Override
        public boolean matches(CharSequence rawPassword, String encodedPassword) {
            return argon2.verify(encodedPassword, rawPassword.toString().toCharArray());
        }
    }
}
