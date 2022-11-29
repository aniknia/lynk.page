import { Spacer, Flex } from "@chakra-ui/react";
import QA from "./qa";
import QACard from "./qacard";
import ProfileImage from "../profile/profileimage";

export default function About() {
  const qalist: { question: string; answer: string }[] = [
    {
      question: "Who are we?",
      answer: "We are an alternative to linktr.ee",
    },
    {
      question: "Why are we?",
      answer:
        "This is an exercise in optomization of user flow and in making a product. We wanted to allw people to try out the service before having to give up their email address.",
    },
    {
      question: "How are we?",
      answer: "Pretty decent.",
    },
  ];
  return (
    <>
      <Flex
        direction="column"
        minH="calc(100vh - 40px)"
        maxW="650px"
        margin="auto"
        align="center"
      >
        <ProfileImage name="Learn More" image="/logo.svg" />
        <QACard qalist={qalist} />
        <Spacer />
      </Flex>
    </>
  );
}
