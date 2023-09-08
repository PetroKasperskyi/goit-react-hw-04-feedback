import { Wrapper, SectionHeader } from "./Section.styled";

export function Section({ title, children }) {
  return (
    <Wrapper>
      <SectionHeader>{title}</SectionHeader>
      {children}
    </Wrapper>
  );
}