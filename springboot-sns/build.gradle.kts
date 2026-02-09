plugins {
	java
	id("org.springframework.boot") version "4.0.2"
	id("io.spring.dependency-management") version "1.1.7"
	id("com.diffplug.spotless") version "6.25.0"
}

group = "com.meustar"
version = "0.0.1-SNAPSHOT"
description = "Demo project for Spring Boot"

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(25)
	}
}

repositories {
	mavenCentral()
}

dependencies {
	compileOnly("org.projectlombok:lombok")
	annotationProcessor("org.projectlombok:lombok")
	testCompileOnly("org.projectlombok:lombok")
	testAnnotationProcessor("org.projectlombok:lombok")
	implementation("de.mkammerer:argon2-jvm:2.11")
	implementation("org.springframework.boot:spring-boot-starter-security")
	implementation("org.springframework.boot:spring-boot-h2console")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-webmvc")
	runtimeOnly("com.h2database:h2")
	runtimeOnly("org.postgresql:postgresql")
	testImplementation("org.springframework.boot:spring-boot-starter-data-jpa-test")
	testImplementation("org.springframework.boot:spring-boot-starter-webmvc-test")
	testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.withType<Test> {
	useJUnitPlatform()
}

spotless {
	java {
		target("src/*/java/**/*.java")

		// 1. 포맷터
		googleJavaFormat()

		// 2. 부가 기능
		removeUnusedImports()
		trimTrailingWhitespace()
		endWithNewline() // 수정됨 (L -> l)
	}

	kotlinGradle {
		target("**/*.gradle.kts")

		ktlint()
		trimTrailingWhitespace()
		endWithNewline() // 수정됨 (L -> l)
	}

	json {
		target("src/**/*.json")
		simple().indentWithSpaces(2)

		trimTrailingWhitespace()
		endWithNewline() // 수정됨 (L -> l)
	}
}