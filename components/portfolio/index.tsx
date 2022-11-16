import { PortfolioItem } from "../../utils/portfolio";
import styles from "./index.module.scss";

export interface IPortfolio {
  items: PortfolioItem[];
}

export function Portfolio({ items }: IPortfolio) {
  return (
    <section className={styles.portfolio}>
      <h2>Open Source Portfolio</h2>
      <div className={styles.grid}>
        {items.map((item: PortfolioItem) => {
          return (
            <div className={styles.card} key={item.id}>
              <a
                className={styles.workItem}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.workImg} id={styles[item.id]}></div>
                <div className={styles.workInfo}>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <ul>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
