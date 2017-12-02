import { PortfolioButton } from './portfolioButton';

export class PortfolioItem{
  constructor(
    public title: string,
    public blurb: string,
    public image: string,
    public sourceButton: PortfolioButton,
    public viewButton: PortfolioButton,
  ){}
}
