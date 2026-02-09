package com.meustar.springboot_sns.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

/**
 * User 리포지토리 (Repository)
 * User 엔티티를 이용하여 데이터베이스에 접근(조회, 저장, 수정, 삭제)하는 인터페이스입니다.
 * JpaRepository를 상속받으면 기본적인 CRUD 메서드가 자동으로 생성됩니다.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    
    /**
     * username으로 사용자를 조회합니다.
     * 결과가 있을 수도 있고 없을 수도 있으므로 Optional<User>로 반환합니다.
     * SQL: SELECT * FROM users WHERE username = ?
     */
    Optional<User> findByUsername(String username);
}
