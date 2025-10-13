# E4-MUI-ADMIN-DEMO

MUI로 관리자화면을 만드는 프로젝트에 대한 설명

## 목차

- [1. 계기](#계기)
- [2. 개발환경 구성](#개발환경-구성)
- [3. MUI](#MUI)
- [4. 프론트엔드 아키텍처](#프론트엔드-아키텍처---fsd)

## 계기

MUI로 관리자 페이지 3페이지 정도를 만들 것을 과제로 내주었다.

위 과제를 통해 확인하고자 하는 것은 아래와 같다.

1. 컴포넌트화를 잘하는가
2. 재사용성
3. 시연과 함께 짜여진 코드를 공유도 해야하므로 코드 또한 깔끔해야한다.

## 개발환경 구성

### Languages & Environment

| 항목       |    버전     |
| :--------- | :---------: |
| 형상관리   |     Git     |
| Typescript |    5.9.3    |
| Node JS    | LTS 20.12.2 |
| React JS   |   19.1.1    |
| VS Code    |             |

### VS Code Extensions

> 클릭하시면 다운로드 사이트로 이동합니다.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - eslint 커스텀 규칙 적용
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - rafc, rafce 등의 유용한 단축키 옵션 제공
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 코드 포매팅 일괄 적용
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - 오픈 태그 변경 시 클로징 태그도 변경
- [htmltagwrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap) - html 블럭 선택하고 [alt + w] 입력 시 선택된 html 태그 감쌈
- [HTML End Tag Labels](https://marketplace.visualstudio.com/items?itemName=anteprimorac.html-end-tag-labels) - html 블럭 선택하고 [alt + w] 입력 시 선택된 html 태그 감쌈
- [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)
- [Color Hightlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

### 포매터

> 포매터란? 코드 스타일을 일괄된 스타일이 되도록 해주는 도구

1. vscode extenstion 에서 [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 설치
2. [ctrl + ,] 입력 후 설정 진입
3. 설정 검색 창에 format 검색
4. [Editor: Format On Save] 체크
5. [Editor: Default Formatter] Prettier - Code formatter 선택

## MUI

### MUI란?

https://mui.com/material-ui/getting-started/

- Material UI(MUI)는 구글의 Material Design 가이드라인을 구현한 React 컴포넌트 라이브러리
- 즉, React 프로젝트에서 버튼, 카드, 다이얼로그 같은 UI 요소를 미리 만들어진 디자인 시스템 기반으로 쉽게 사용할 수 있게 해주는 도구

### MUI를 쓰는 이점

- **빠른 개발**: 이미 완성도 높은 컴포넌트들이 있어서 디자인이나 기본 UI를 새로 만들 필요가 없음.

- **예쁜 디자인 기본 제공**: 구글의 Material Design을 충실히 구현했기 때문에 기본 상태로도 깔끔하고 일관된 디자인.

- **커스터마이징 용이**: 색상, 폰트, 모양 등을 쉽게 바꿔서 자신만의 디자인 시스템을 만들 수 있음.

- **협업에 유리**: 디자이너와 개발자가 같은 디자인 언어(Material Design)를 기반으로 작업하므로 협업 효율이 높음.

- **검증된 안정성**: 2014년부터 유지되고 있으며, 커뮤니티가 크고 안정적임.

## 프론트엔드 아키텍처 - FSD

**Feature-Sliced Design (FSD)** 를 사용하고 있다.

공식 문서: https://feature-sliced.design/kr/docs/get-started/overview<br/>
참고: https://velog.io/@clydehan/FSDFeature-Sliced-Design-%EC%99%84%EB%B2%BD-%EA%B0%80%EC%9D%B4%EB%93%9C

### 왜 FSD인가?

#### 클린 아키텍처

[참고](https://medium.com/@dndb3599/frontend%EC%97%90%EC%84%9C-clean-architecture-7c7e9cef38a9)
![레이어 다이어그램](https://velog.velcdn.com/images/bluejoyq/post/d03bdbb2-58ed-4b46-b6b0-6accce4e2887/image.png)

1. **경계 설정 / 레이어 분리** : 기능 단위로 독립적인 모듈들이 됨으로서 서로 간의 결합도가 낮아지며, 테스트하기 쉬워진다.
2. **도메인 중심성** : 도메인(비즈니스)을 외부 요소(프레임워크, UI, API 등)로부터 독립시켜 가장 중앙에 위치한 원칙으로 한다. 이렇게 하면 UI 프레임워크를 React → 다른 것으로 바꿔도, 혹은 API 구조가 바뀌어도 비즈니스 로직(도메인)은 최소한의 변경만으로 유지된다.
3. **어댑터 기반 확장성** : 외부 종속을 인터페이스 + 어댑터 쪽으로 격리함으로서 외부 변경에 유연, 모듈 교체 쉬워진다.

#### 클린 아키텍처와 FSD의 연관성

- Clean Architecture는 “한 기능 안에서 코드가 어떻게 분리되어야 하는가”
- FSD는 “프로젝트 전체에서 기능(feature) 단위로 어떻게 구조화할 것인가”

1. FSD에서는 각 Layer 안에 각 기능(예: auth, user, cart)을 독립된 모듈 존재

   - 한 기능의 변경이 다른 기능에 영향을 거의 주지 않게 된다.

2. FSD는 기능 내부에서 도메인 로직을 UI와 인프라로부터 분리

   - 결과적으로 React가 Vue로 바뀌어도, API 통신이 REST → GraphQL로 바뀌어도 도메인 로직은 그대로 유지

3. 레이어의 분리와 레이어 간의 종속관계를 통해 외부 종속(프레임워크, API, 라이브러리)을 어댑터로 감싸서 유연하게 교체 가능

#### 정리

- **테스트**: 도메인 로직만 단위 테스트 가능.
- **교체 용이성**: React → Next.js, REST → GraphQL로 바뀌어도 핵심 로직은 그대로 유지.
- **확장성**: 기능 단위로 독립 배포·리팩터링이 쉬움.

### FSD 개념

#### 계층구조

FSD는 다음과 같은 3단계 계층 구조를 따른다.

![FSD 개념의 계층 구조](https://velog.velcdn.com/images/clydehan/post/ddee7d5d-8f50-4946-bf71-5914e841a36f/image.png)

위 다이어그램은 FSD의 계층 구조를 시각적으로 보여준다. 세 개의 수직 블록 그룹은 각각 Layer, Slice, Segment를 나타낸다.

왼쪽의 Layer 블록에는 app, processes, pages, widgets, features, entities, shared가 포함된다.

예를 들어, entities Layer 안에는 여러 개의 Slice가 존재하며, 예시로는 user, post, comment 등이 있다.

각 Slice는 다시 기능 목적에 따라 나뉘는 Segment로 구성됩니다. 예시로 post Slice에는 ui, model, api Segment가 포함된다.

#### Layer

Layer는 모든 FSD 프로젝트의 표준 최상위 폴더이다.

FSD의 복잡한 계층 구조를 더 쉽게 이해할 수 있도록 전체적인 흐름을 정리하면 다음과 같다.

- Shared 레이어: Button과 같은 기본 컴포넌트를 제공하여, 프로젝트 전반에서 다양한 버튼 스타일을 일관되게 사용할 수 있도록 한다.
- Entities 레이어: User 엔터티를 정의하여 사용자 데이터를 관리하고, 이를 다양한 컴포넌트에서 활용할 수 있게 한다.
- Features 레이어: FollowUser 기능을 정의해, 사용자가 다른 사용자를 팔로우할 수 있는 구체적인 동작을 제공하며, User 엔터티와 Shared 레이어의 Button 컴포넌트를 함께 활용한다.
- Widgets 레이어: UserProfile 위젯에서 FollowUser 기능을 포함해 사용자 프로필 정보를 표시하며 팔로우 버튼을 제공한다.
- Pages 레이어: UserPage에서 UserProfile 위젯을 포함하여 하나의 완전한 사용자 페이지를 구성한다.
- App 레이어: 전체 앱의 라우팅과 전역 설정을 관리하고, UserPage가 /user 경로에서 노출되도록 설정한다.

~~상위 Layer의 모듈은 자신보다 하위 Layer만 참조할 수 있다.~~
App·Shared Layer는 Slice 없이 곧바로 Segment로 구성된다.

> 원칙 상 상위 Layer의 모듈은 자신보다 하위 Layer만 참조할 수 있지만, 공통 유틸 및 설정 등에 비즈니스로직이 포함될 수 있으니 shared에서는 features나 entities 레이어를 참조할 수 있다.

#### Slice

Slice는 Layer 내부를 비즈니스 도메인별로 나눈다. 이름·개수에 제한이 없으며, ~~같은 Layer 내 다른 Slice를 참조할 수 없다~~. 이 규칙이 높은 응집도와 낮은 결합도를 보장한다.

> 원칙 상 같은 Layer 내 다른 Slice를 참조할 수 없지만, Features 및 Entities 레이어의 경우 필요 시 같은 같은 layer 내 다른 slice를 참조할 수 있다.

#### Segment

Slice와 App·Shared Layer는 Segment로 세분화되어, 기술적 목적에 따라 코드를 그룹화한다. 일반적으로 다음과 같은 Segment를 사용한다.

- ui - UI components, date formatter, styles 등 UI 표현과 직접 관련된 코드
- component - ui 에서 재사용되어 사용될 작은 UI 블럭
- api - request functions, data types, mappers 등 백엔드 통신 및 데이터 로직
- model - schema, interfaces, store, business logic 등 애플리케이션 도메인 모델
- lib - 해당 Slice에서 여러 모듈이 함께 사용하는 공통 library code
- config - configuration files, feature flags 등 환경·기능 설정

대부분의 Layer에서는 위 다섯 Segment로 충분하다. 필요하다면 App 또는 Shared Layer에서만 추가 Segment를 정의하세요. (필수 규칙은 아닙니다.)
