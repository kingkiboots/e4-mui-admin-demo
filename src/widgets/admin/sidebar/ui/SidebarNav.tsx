import { memo } from "react";

const SidebarNav = memo(() => {
  return (
    <nav
      id="js-primary-nav"
      className="primary-nav js-list-filter"
      role="navigation"
    >
      <ul id="js-nav-menu" className="nav-menu js-nav-built">
        <li className="active open">
          <a
            href="#"
            aria-expanded="true"
            className=" waves-effect waves-themed"
          >
            <i className="fal fa-smile"></i>
            <span className="nav-link-text">해피페이머니</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-up"></em>
            </b>
          </a>
          <ul>
            <li>
              <a
                href="회원정보 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">회원정보 관리</span>
              </a>
            </li>
            <li>
              <a
                href="연결계좌 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">연결계좌 관리</span>
              </a>
            </li>
            <li>
              <a
                href="회원등급 내역.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">회원등급 내역</span>
              </a>
            </li>
            <li>
              <a
                href="챌린지참여 내역.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">챌린지참여 내역</span>
              </a>
            </li>
            <li>
              <a
                href="충전-인출내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">충전/인출내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="전환내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">전환내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="사용내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">사용내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="적립내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">적립내역 조회</span>
              </a>
            </li>
            <li className="active">
              <a href="한도 관리.html" className=" waves-effect waves-themed">
                <span className="nav-link-text">한도 관리</span>
              </a>
            </li>
            <li>
              <a
                href="회원등급 조정.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">회원등급 조정</span>
              </a>
            </li>
            <li>
              <a
                href="회원등급 조정내역.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">회원등급 조정내역</span>
              </a>
            </li>
            <li>
              <a
                href="적립머니 지급-회수 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">적립머니 지급/회수 관리</span>
              </a>
            </li>
            <li>
              <a
                href="해피페이머니 회원 현황.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">해피페이머니 회원 현황</span>
              </a>
            </li>
            <li>
              <a
                href="충전-인출-전환-사용 현황.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">충전/인출/전환/사용 현황</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className=" waves-effect waves-themed">
            <i className="fal fa-gem"></i>
            <span className="nav-link-text">상품/혜택</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-down"></em>
            </b>
          </a>
          <ul>
            <li>
              <a
                href="상품정보 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">상품정보 관리</span>
              </a>
            </li>
            <li>
              <a
                href="챌린지팝업 관리.html"
                style={{ color: "aqua" }}
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">챌린지팝업 관리</span>
              </a>
            </li>
            <li>
              <a
                href="챌린지 관리.html"
                style={{ color: "aqua" }}
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">챌린지 관리</span>
              </a>
            </li>
            <li>
              <a
                href="챌린지 미참여 회원 조회.html"
                style={{ color: "aqua" }}
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">챌린지 미참여 회원 조회</span>
              </a>
            </li>
            <li>
              <a
                href="챌린지 현황.html"
                style={{ color: "aqua" }}
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">챌린지 현황</span>
              </a>
            </li>
            <li>
              <a
                href="챌린지 통합 지표.html"
                style={{ color: "aqua" }}
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">챌린지 통합 지표</span>
              </a>
            </li>
            <li>
              <a
                href="기본혜택 관리.html"
                style={{ color: "aqua" }}
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">기본혜택 관리</span>
              </a>
            </li>
            <li>
              <a
                href="기본혜택 리워드 내역.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">기본혜택 리워드 내역</span>
              </a>
            </li>
            <li>
              <a
                href="회원 등급기준 관리.html"
                style={{ color: "aqua" }}
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">회원 등급기준 관리</span>
              </a>
            </li>
            <li>
              <a
                href="브랜드 상세정보 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">브랜드 상세정보 관리</span>
              </a>
            </li>
            <li>
              <a
                href="등급별 결제 혜택 관리.html"
                style={{ color: "aqua" }}
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">등급별 결제 혜택 관리</span>
              </a>
            </li>
            <li>
              <a
                href="등급별 결제 혜택 리워드 내역.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">
                  등급별 결제 혜택 리워드 내역
                </span>
              </a>
            </li>
            <li>
              <a
                href="브랜드별 리워드 통계.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">브랜드별 리워드 통계</span>
              </a>
            </li>
            <li>
              <a
                href="등급별 리워드 통계.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">등급별 리워드 통계</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className=" waves-effect waves-themed">
            <i className="fal fa-warehouse-alt"></i>
            <span className="nav-link-text">가맹점</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-down"></em>
            </b>
          </a>
          <ul>
            <li>
              <a
                href="가맹점정보 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">가맹점정보 조회</span>
              </a>
            </li>
            <li>
              <a
                href="그룹가맹점정보 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">그룹가맹점정보 관리</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className=" waves-effect waves-themed">
            <i className="fal fa-credit-card"></i>
            <span className="nav-link-text">카드</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-down"></em>
            </b>
          </a>
          <ul>
            <li>
              <a
                href="카드발급 신청.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">카드발급 신청</span>
              </a>
            </li>
            <li>
              <a
                href="발급집계내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">발급집계내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="카드 비밀번호 변경.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">카드 비밀번호 변경</span>
              </a>
            </li>
            <li>
              <a
                href="제신고이력 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">제신고이력 조회</span>
              </a>
            </li>
            <li>
              <a
                href="카드 발급-배송 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">카드 발급/배송 조회</span>
              </a>
            </li>
            <li>
              <a
                href="반송카드 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">반송카드 관리</span>
              </a>
            </li>
            <li>
              <a
                href="신분증 진위여부 내역조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">신분증 진위여부 내역조회</span>
              </a>
            </li>
            <li>
              <a
                href="1차카드발급 신청.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">1차카드발급 신청</span>
              </a>
            </li>
            <li>
              <a href="영업점관리.html" className=" waves-effect waves-themed">
                <span className="nav-link-text">영업점관리</span>
              </a>
            </li>
            <li>
              <a
                href="DIPS이용대금 청구내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">
                  DIPS이용대금 청구내역 조회
                </span>
              </a>
            </li>
            <li>
              <a
                href="DIPS소득공제내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">DIPS소득공제내역 조회</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className=" waves-effect waves-themed">
            <i className="fal fa-clipboard-check"></i>
            <span className="nav-link-text">승인/사고</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-down"></em>
            </b>
          </a>
          <ul>
            <li>
              <a
                href="카드사고 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">카드사고 관리</span>
              </a>
            </li>
            <li>
              <a
                href="카드사고 매트릭스 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">카드사고 매트릭스 관리</span>
              </a>
            </li>
            <li>
              <a
                href="승인내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">승인내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="승인집계내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">승인집계내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="승인대사내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">승인대사내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="BC승인대사로그집계내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">
                  BC승인대사로그집계내역 조회
                </span>
              </a>
            </li>
            <li>
              <a
                href="DIPS승인내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">DIPS승인내역 조회</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className=" waves-effect waves-themed">
            <i className="fal fa-scanner-keyboard"></i>
            <span className="nav-link-text">매입/정산</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-down"></em>
            </b>
          </a>
          <ul>
            <li>
              <a
                href="매입내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">매입내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="매입집계내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">매입집계내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="EDI취소선지급내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">EDI취소선지급내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="온라인PG사업자 재정산내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">
                  온라인PG사업자재정산내역 조회
                </span>
              </a>
            </li>
            <li>
              <a
                href="미입출금내역 조회 및 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">미입출금내역 조회 및 관리</span>
              </a>
            </li>
            <li>
              <a
                href="가맹점 정산내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">가맹점 정산내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="매출항목별 가맹점 정산집계내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">
                  매출항목별 가맹점 정산집계내역 조회
                </span>
              </a>
            </li>
            <li>
              <a
                href="BC대행수수료 정산내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">
                  BC대행수수료 정산내역 조회
                </span>
              </a>
            </li>
            <li>
              <a
                href="대행수수료코드 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">대행수수료코드 관리</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className=" waves-effect waves-themed">
            <i className="fal fa-calculator"></i>
            <span className="nav-link-text">회계</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-down"></em>
            </b>
          </a>
          <ul>
            <li>
              <a
                href="계정처리내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">계정처리내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="계정처리집계내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">계정처리집계내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="회계 계정코드 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">회계 계정코드 관리</span>
              </a>
            </li>
            <li>
              <a
                href="세금계산서 발행내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">세금계산서 발행내역 조회</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className=" waves-effect waves-themed">
            <i className="fal fa-university"></i>
            <span className="nav-link-text">오픈뱅킹</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-down"></em>
            </b>
          </a>
          <ul>
            <li>
              <a
                href="참가기관 상태 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">참가기관 상태 조회</span>
              </a>
            </li>
            <li>
              <a
                href="오픈뱅킹 수수료 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">오픈뱅킹 수수료 조회</span>
              </a>
            </li>
            <li>
              <a
                href="API 사용 집계 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">API 사용 집계 조회</span>
              </a>
            </li>
            <li>
              <a
                href="출금이체 한도 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">출금이체 한도 조회</span>
              </a>
            </li>
            <li>
              <a
                href="이상거래탐지내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">이상거래탐지내역 조회</span>
              </a>
            </li>
            <li>
              <a href="API 관리.html" className=" waves-effect waves-themed">
                <span className="nav-link-text">API 관리</span>
              </a>
            </li>
            <li>
              <a
                href="API 사용시스템 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">API 사용시스템 관리</span>
              </a>
            </li>
            <li>
              <a
                href="이용기관정보.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">이용기관정보</span>
              </a>
            </li>
            <li>
              <a
                href="이용기관 등록계좌 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">이용기관 등록계좌 관리</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className=" waves-effect waves-themed">
            <i className="fal fa-money-bill-alt"></i>
            <span className="nav-link-text">선불정보</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-down"></em>
            </b>
          </a>
          <ul>
            <li>
              <a
                href="정보제공거래내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">정보제공거래내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="정보제공정상처리내역 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">정보제공정상처리내역 조회</span>
              </a>
            </li>
            <li>
              <a
                href="정보제공처리대행비용 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">정보제공처리대행비용 조회</span>
              </a>
            </li>
            <li>
              <a
                href="정보제공수취수수료 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">정보제공수취수수료 조회</span>
              </a>
            </li>

            <li>
              <a
                href="정보제공 회원정보 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">정보제공 회원정보 관리</span>
              </a>
            </li>
            <li>
              <a
                href="선불이용기관 정보 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">선불이용기관 정보 조회</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className=" waves-effect waves-themed">
            <i className="fal fa-hand-receiving"></i>
            <span className="nav-link-text">공통정보</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-down"></em>
            </b>
          </a>
          <ul>
            <li>
              <a
                href="공통그룹코드 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">공통그룹코드 관리</span>
              </a>
            </li>
            <li>
              <a
                href="공통코드 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">공통코드 관리</span>
              </a>
            </li>
            <li>
              <a href="영업일 관리.html" className=" waves-effect waves-themed">
                <span className="nav-link-text">영업일 관리</span>
              </a>
            </li>
            <li>
              <a href="약관 관리.html" className=" waves-effect waves-themed">
                <span className="nav-link-text">약관 관리</span>
              </a>
            </li>
            <li>
              <a
                href="BIN번호별 채번정보 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">BIN번호별 채번정보 관리</span>
              </a>
            </li>
            <li>
              <a
                href="금융기관 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">금융기관 관리</span>
              </a>
            </li>
            <li>
              <a
                href="공지사항 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">공지사항 관리</span>
              </a>
            </li>
            <li>
              <a href="배너관리.html" className=" waves-effect waves-themed">
                <span className="nav-link-text">배너관리</span>
              </a>
            </li>
            <li>
              <a
                href="이용안내 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">이용안내 관리</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className=" waves-effect waves-themed">
            <i className="fal fa-cog"></i>
            <span className="nav-link-text">시스템</span>
            <b className="collapse-sign">
              <em className="fal fa-angle-down"></em>
            </b>
          </a>
          <ul>
            <li>
              <a href="메뉴 관리.html" className=" waves-effect waves-themed">
                <span className="nav-link-text">메뉴 관리</span>
              </a>
            </li>
            <li>
              <a
                href="메뉴 권한그룹 관리.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">메뉴 권한그룹 관리</span>
              </a>
            </li>
            <li>
              <a href="사용자 관리.html" className=" waves-effect waves-themed">
                <span className="nav-link-text">사용자 관리</span>
              </a>
            </li>
            <li>
              <a
                href="Admin 사용자 이력 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">Admin 사용자 이력 조회</span>
              </a>
            </li>
            <li>
              <a
                href="대외 송수신로그 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">대외 송수신로그 조회</span>
              </a>
            </li>
            <li>
              <a
                href="오픈뱅킹 로그 조회.html"
                className=" waves-effect waves-themed"
              >
                <span className="nav-link-text">오픈뱅킹 로그 조회</span>
              </a>
            </li>
            <li>
              <a href="배치 관리.html" className=" waves-effect waves-themed">
                <span className="nav-link-text">배치 관리</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
});

SidebarNav.displayName = "SidebarNav";
export default SidebarNav;
