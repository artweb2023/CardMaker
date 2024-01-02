import { Size } from "../../../../model/types";

type ArtSnowViewProps = {
  color: string;
  size: Size;
};

function ArtSnowView({ color, size: { width, height } }: ArtSnowViewProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5001 45C21.7234 45 21.0938 44.3704 21.0938 43.5938V39.9575L19.2757 41.7756C18.7265 42.3248 17.8361 42.3248 17.287 41.7756C16.7378 41.2264 16.7378 40.3361 17.287 39.7869L21.0938 35.98L21.0938 24.9357L11.5291 30.4578L10.1357 35.6581C9.93471 36.4083 9.16361 36.8535 8.41342 36.6525C7.66324 36.4515 7.21805 35.6804 7.41906 34.9302L8.08454 32.4466L4.93544 34.2647C4.26285 34.653 3.40279 34.4226 3.01447 33.75C2.62614 33.0774 2.8566 32.2173 3.52919 31.829L6.67829 30.0109L4.19467 29.3454C3.44449 29.1444 2.99929 28.3733 3.20031 27.6231C3.40132 26.8729 4.17242 26.4277 4.9226 26.6287L10.1229 28.0221L19.6876 22.5L10.123 16.9778L4.92267 18.3712C4.17248 18.5723 3.40139 18.1271 3.20037 17.3769C2.99936 16.6267 3.44456 15.8556 4.19474 15.6546L6.67836 14.9891L3.52926 13.171C2.85666 12.7826 2.62621 11.9226 3.01454 11.25C3.40286 10.5774 4.26291 10.3469 4.93551 10.7353L8.08461 12.5534L7.41912 10.0698C7.21811 9.3196 7.66331 8.5485 8.41349 8.34749C9.16368 8.14647 9.93478 8.59167 10.1358 9.34186L11.5292 14.5421L21.0938 20.0643V9.01999L17.287 5.21312C16.7378 4.66394 16.7378 3.77356 17.287 3.22438C17.8361 2.67521 18.7265 2.67521 19.2757 3.22438L21.0938 5.04251L21.0938 1.40625C21.0938 0.6296 21.7234 0 22.5001 0C23.2767 0 23.9063 0.6296 23.9063 1.40625L23.9063 5.04251L25.7245 3.22438C26.2736 2.67521 27.164 2.67521 27.7132 3.22438C28.2624 3.77356 28.2624 4.66394 27.7132 5.21312L23.9063 9.01999V20.0643L33.4709 14.5421L34.8644 9.34186C35.0654 8.59167 35.8365 8.14647 36.5867 8.34749C37.3368 8.5485 37.782 9.3196 37.581 10.0698L36.9155 12.5534L40.0646 10.7353C40.7372 10.3469 41.5973 10.5774 41.9856 11.25C42.3739 11.9226 42.1435 12.7826 41.4709 13.171L38.3218 14.9891L40.8054 15.6546C41.5556 15.8556 42.0008 16.6267 41.7998 17.3769C41.5988 18.1271 40.8277 18.5723 40.0775 18.3712L34.8772 16.9778L25.3126 22.5L34.8773 28.0221L40.0775 26.6287C40.8277 26.4277 41.5988 26.8729 41.7998 27.6231C42.0009 28.3733 41.5557 29.1444 40.8055 29.3454L38.3219 30.0109L41.471 31.829C42.1436 32.2173 42.374 33.0774 41.9857 33.75C41.5974 34.4226 40.7373 34.653 40.0647 34.2647L36.9156 32.4466L37.5811 34.9302C37.7821 35.6804 37.3369 36.4515 36.5867 36.6525C35.8365 36.8535 35.0654 36.4083 34.8644 35.6581L33.471 30.4578L23.9063 24.9357L23.9063 35.98L27.7132 39.7869C28.2624 40.3361 28.2624 41.2264 27.7132 41.7756C27.164 42.3248 26.2736 42.3248 25.7245 41.7756L23.9063 39.9575V43.5938C23.9063 44.3704 23.2767 45 22.5001 45Z"
        fill={color}
      />
    </svg>
  );
}

export { ArtSnowView };