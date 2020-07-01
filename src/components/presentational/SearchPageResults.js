import React from 'react';
import styled from 'styled-components';
import thumbnail from '../../img/thumbnail_img.jpg';

const StyledResultsWrapper = styled.div`
    margin-left: 166.66px;
    border-right: 1px solid #e8e8e8;
    padding-right: 25px;
`;

const dummyContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const dummyTitle = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
const dummyTitleKo = "별 헤는 밤";
const dummyContentKo = "옥 이름을 이웃 애기 오면 하나에 듯합니다. 지나가는 한 노루, 이름과, 별에도 별 이웃 애기 그리워 있습니다. 둘 이 헤는 못 있습니다. 다 하나에 마리아 북간도에 이네들은 봅니다. 나의 오는 밤을 위에 위에 이름자 별이 가슴속에 거외다. 이름과, 청춘이 하나에 위에 프랑시스 이국 많은 까닭입니다. 책상을 지나가는 패, 봅니다. 내린 책상을 까닭이요, 하나에 버리었습니다. 다 밤을 옥 아직 어머님, 것은 애기 별 소학교 버리었습니다. 별 아름다운 그리고 봅니다.";


function SearchPageResults() {

  return (
    <StyledResultsWrapper>
        <SectionList title="포스트">
            <SectionListItem
                title={dummyTitle}
                domainUrl="loremipsum.io"
                siteName="Lorem Ipsum"
                thumbnailUrl="https://loremipsum.io/"
                date="2020-07-01"
                content={dummyContent}
                targetUrl="https://loremipsum.io/"
                uploader="BeomSeok"
            />
            <SectionListItem
                title={dummyTitle}
                domainUrl="loremipsum.io"
                siteName="Lorem Ipsum"
                thumbnailUrl={null}
                date="2020-07-01"
                content={dummyContent}
                targetUrl="https://loremipsum.io/"
                uploader="BeomSeok"
            />
            <SectionListItem
                title={dummyTitleKo}
                domainUrl="hangul.thefron.me"
                siteName="한글입숨"
                thumbnailUrl="http://hangul.thefron.me/"
                date="2020-07-01"
                content={dummyContentKo}
                targetUrl="http://hangul.thefron.me/"
                uploader="강범석"
            />
        </SectionList>
        <SectionList title="블로그">
            <SectionListItem
                title={dummyTitle}
                domainUrl="loremipsum.io"
                siteName="Lorem Ipsum"
                thumbnailUrl="https://loremipsum.io/"
                date="2020-07-01"
                content={dummyContent}
                targetUrl="https://loremipsum.io/"
                uploader="BeomSeok"
            />
            <SectionListItem
                title={dummyTitle}
                domainUrl="loremipsum.io"
                siteName="Lorem Ipsum"
                thumbnailUrl={null}
                date="2020-07-01"
                content={dummyContent}
                targetUrl="https://loremipsum.io/"
                uploader="BeomSeok"
            />
            <SectionListItem
                title={dummyTitleKo}
                domainUrl="hangul.thefron.me"
                siteName="한글입숨"
                thumbnailUrl="http://hangul.thefron.me/"
                date="2020-07-01"
                content={dummyContentKo}
                targetUrl="http://hangul.thefron.me/"
                uploader="강범석"
            />
        </SectionList>
        <SectionList title="카페">
            <SectionListItem
                title={dummyTitle}
                domainUrl="loremipsum.io"
                siteName="Lorem Ipsum"
                thumbnailUrl="https://loremipsum.io/"
                date="2020-07-01"
                content={dummyContent}
                targetUrl="https://loremipsum.io/"
                uploader="BeomSeok"
            />
            <SectionListItem
                title={dummyTitle}
                domainUrl="loremipsum.io"
                siteName="Lorem Ipsum"
                thumbnailUrl={null}
                date="2020-07-01"
                content={dummyContent}
                targetUrl="https://loremipsum.io/"
                uploader="BeomSeok"
            />
            <SectionListItem
                title={dummyTitleKo}
                domainUrl="hangul.thefron.me"
                siteName="한글입숨"
                thumbnailUrl="http://hangul.thefron.me/"
                date="2020-07-01"
                content={dummyContentKo}
                targetUrl="http://hangul.thefron.me/"
                uploader="강범석"
            />
        </SectionList>
    </StyledResultsWrapper>
  );
}

//////////////////////////////////////SECTION//////////////////////////

const StyledSectionList = styled.ul`
    width: 561px;
    margin-top: 27px;
    padding: 0;
    list-style: none;

    &+&{
        border-top: 1px solid #e8e8e8;
    }
`;

const StyledSectionTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 17px;
    color: #000000;
    line-height: 22px;
`;

function SectionList ({ children, title }) {

    return <StyledSectionList>
        <StyledSectionTitle>{title}</StyledSectionTitle>
        {children}
    </StyledSectionList>
}


//////////////////////////////////////LIST ITEM////////////////////////

const StyledSectionListItem = styled.li`
    margin-bottom: 27px;
    justify-content: flex-start;
`;

const StyledDomain = styled.a`
    display: block;
    max-width: 100%;
    text-decoration: none;
    color: #3C4043;
    width: max-content;
    font-size: 13px;
    line-height: 16px;
    padding-top: 1px;
`;

const StyledTitle = styled.a`
    display: block;
    max-width: 100%;
    text-decoration: none;
    color: rgb(26,13,171);
    width: max-content;
    margin-bottom: 3px;
    font-size: 14px;
    line-height: 26px;
    padding-top: 4px;
    &:hover{
        text-decoration: underline;
    }
`;

const StyledFlexWrapper = styled.div`
    display: flex;
    font-size: 12px;
    line-height: 18px;
    div {
        width: 469px;
        color: #70757A;
    }
    p {
        width: 469px;
        color: #3C4043;

    }
`;

const StyledThumbnail = styled.a`
    display: block;
    width: 82px;
    height: 82px;
    margin-right: 10px;
    background: grey;
    text-indent: -9999px;
    background: url(${thumbnail}) no-repeat;
    background-size: contain;
`;



function SectionListItem ({
    title, domainUrl, siteName, thumbnailUrl, date, content, targetUrl, uploader
}) {

    return (
        <StyledSectionListItem>
            <StyledDomain>{domainUrl}</StyledDomain>
            <StyledTitle href="#">{title + ' - ' + siteName}</StyledTitle>
            <StyledFlexWrapper>
                {thumbnailUrl
                    ? <StyledThumbnail
                        href={targetUrl}
                        >
                            Thumbnail Image
                        </StyledThumbnail>
                    : null
                }
                <div>
                    <div style={{width: !thumbnailUrl? '561px': '469px'}}>
                        {date + ' - ' + uploader}
                    </div>
                    <p style={{width: !thumbnailUrl? '561px': '469px'}}>
                        {content}
                    </p>
                </div>
            </StyledFlexWrapper>   
        </StyledSectionListItem>
    );
}

export default SearchPageResults;