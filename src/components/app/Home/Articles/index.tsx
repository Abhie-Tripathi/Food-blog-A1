import {
  Box,
  Button,
  Flex,
  Hide,
  IconButton,
  Show,
  Text,
} from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import { articlesDesktop, articlesMobile } from "../../../../lib/articles";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

const CarouselWrapper = styled.div({
  overflow: "hidden",
});

const SlidesWrapper = styled.div({
  display: "flex",
  // gap: "",
  // gap: "100px",
});

const Slide = styled.div({
  display: "flex",
  flex: "0 0 100%",
  overflow: "hidden",
  flexDirection: "column",
  gap: "61px",
  // width: "100vw",
});

const DesktopSlide = styled.div({
  display: "flex",
  flex: "0 0 100%",
  overflow: "hidden",
  justifyContent: "space-between",
});

const Articles = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <Box padding="132px 0 0 0" maxW="1225px" margin="0 auto 0 auto">
      <h2>Latest Articles</h2>
      <Box
        // padding="23px 52px 57px 52px"
        padding="23px 0px 57px 0px"
      >
        {/* <ArticleCard {...articlesMobile[0][0]} /> */}
        <CarouselWrapper ref={emblaRef}>
          <SlidesWrapper>
            <Hide above="lg">
              {articlesMobile.map((i, id) => (
                <Slide key={id}>
                  {i.map((j, jid) => (
                    <ArticleCard key={jid} {...j} />
                  ))}
                </Slide>
              ))}
            </Hide>
            <Show above="lg">
              {articlesDesktop.map((i, id) => (
                <DesktopSlide key={id}>
                  {i.map((j, jid) => (
                    <ArticleCard key={jid} {...j} />
                  ))}
                </DesktopSlide>
              ))}
            </Show>
          </SlidesWrapper>
        </CarouselWrapper>
        <Flex justify="center" marginTop="52px" alignItems="center" gap="7px">
          <IconButton
            variant="outline"
            height={{
              base: "16px",
              bsm: "28px",
            }}
            minWidth={{
              base: "16px",
              bsm: "28px",
            }}
            borderRadius={5}
            disabled={prevBtnDisabled}
            border={prevBtnDisabled ? "1px solid #AFAFAF" : "1px solid #424961"}
            onClick={scrollPrev}
            icon={
              <>
                <Hide above="bsm">
                  <ChevronLeftIcon
                    // fill="current"
                    style={{
                      height: "12px",
                      width: "12px",
                      color: prevBtnDisabled ? "#AFAFAF" : "#424961",
                    }}
                  />
                </Hide>
                <Show above="bsm">
                  <ChevronLeftIcon
                    // fill="current"
                    style={{
                      height: "22px",
                      width: "22px",
                      color: prevBtnDisabled ? "#AFAFAF" : "#424961",
                    }}
                  />
                </Show>
              </>
            }
            aria-label="left swipe carousel"
          />
          <Text
            fontSize={{
              base: "12px",
              bsm: "22px",
            }}
          >
            {selectedIndex + 1}/{scrollSnaps.length}
          </Text>
          <IconButton
            variant="outline"
            height={{
              base: "16px",
              bsm: "28px",
            }}
            minWidth={{
              base: "16px",
              bsm: "28px",
            }}
            borderRadius={5}
            disabled={nextBtnDisabled}
            border={nextBtnDisabled ? "1px solid #AFAFAF" : "1px solid #424961"}
            onClick={scrollNext}
            icon={
              <>
                <Hide above="bsm">
                  <ChevronRightIcon
                    style={{
                      height: "12px",
                      width: "12px",
                      color: nextBtnDisabled ? "#AFAFAF" : "#424961",
                    }}
                  />
                </Hide>
                <Show above="bsm">
                  <ChevronRightIcon
                    style={{
                      height: "22px",
                      width: "22px",
                      color: nextBtnDisabled ? "#AFAFAF" : "#424961",
                    }}
                  />
                </Show>
              </>
            }
            aria-label="right swipe carousel"
          />
        </Flex>
      </Box>
    </Box>
  );
};
export default Articles;
