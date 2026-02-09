package com.meustar.springboot_sns.domain.user;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * User 엔티티 (Entity)
 * 데이터베이스의 'users' 테이블과 1:1로 매핑되는 자바 클래스입니다.
 * 사용자 정보를 담고 있습니다.
 */
@Entity // 이 클래스가 JPA 엔티티임을 나타냅니다. (DB 테이블과 연결됨)
@Table(name = "users") // DB 테이블 이름을 'users'로 지정합니다. (user는 예약어인 경우가 많아 피함)
@Getter // 모든 필드에 대한 Getter 메서드를 자동으로 생성합니다. (예: getUsername())
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 기본 생성자를 protected로 생성합니다. (JPA 필수 조건, 외부에서 무분별한 생성 방지)
public class User {

    @Id // 이 필드가 테이블의 기본 키(Primary Key)임을 나타냅니다.
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본 키 생성을 DB에 위임합니다. (MySQL의 AUTO_INCREMENT)
    private Long id;

    @Column(nullable = false, unique = true) // null 불가, 중복 불가 (유일한 값이어야 함)
    private String username;

    @Column(nullable = false) // null 불가
    private String password;

    /**
     * 빌더 패턴을 사용한 생성자입니다.
     * 외부에서 User 객체를 생성할 때 사용합니다.
     */
    @Builder
    private User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    /**
     * 정적 팩토리 메서드
     * User 객체 생성을 더 편하고 의미 있게 하기 위한 메서드입니다.
     * 예: User.of("user1", "pass1234")
     */
    public static User of(String username, String password) {
        return User.builder()
                .username(username)
                .password(password)
                .build();
    }
}
