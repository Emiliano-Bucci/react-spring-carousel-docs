import { css } from "linaria";
import { PageNavigationButton } from "molecoles/PageNavigationButton";

type BtnProps = {
  label: string;
  href: string;
};
type Props = {
  prevBtn?: BtnProps;
  nextBtn?: BtnProps;
};

export function PageNavigationFooter({ prevBtn, nextBtn }: Props) {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        margin-top: 8rem;
        & > * {
          :last-of-type {
            margin-left: auto;
          }
        }
      `}
    >
      {prevBtn && (
        <PageNavigationButton
          type="prev"
          linkProps={{
            href: prevBtn.href,
          }}
        >
          {prevBtn.label}
        </PageNavigationButton>
      )}
      {nextBtn && (
        <PageNavigationButton
          type="next"
          linkProps={{
            href: nextBtn.href,
          }}
        >
          {nextBtn.label}
        </PageNavigationButton>
      )}
    </div>
  );
}
