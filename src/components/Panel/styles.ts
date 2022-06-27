import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  overflow: hidden;
  width: 65%;
`;

export const Card = styled.div`
  background: linear-gradient(to bottom, #74CB48, #FFF);
  min-height: 500px;
  padding: 0.5em;
  display: grid;
  grid-template-rows: 40% 50% 10%;

  .card__header {
    display: grid;
    place-items: center;
  }

  .card__id {
    color: #FFFFFF44;
    font-weight: 500;
    font-size: 140px;
  }

  .card__img {
    filter: drop-shadow(4px 4px 4px rgba(4,8,12,.2));
    width: 144px;
  }

  .card__id,
  .card__img {
    grid-column: 1;
    grid-row: 1;
  }

  .card__info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    color: #66625c;
    padding: 0 1em 2em 1em;
  }

  .card__name {
    color: #FFF;
    font-size: 2.8rem;
    font-weight: 500;
  }

  .card__genus {
    color: #66625c;
    line-height: 2;
    text-align: center;
  }

  .card__type {
    font-weight: 500;
  }

  .card__type--grass {
    color: #22c02a;
  }

  .card__type--poison {
    color: #a040a0;
  }

  .card__type + .card__type::before {
    background-color: #a39f99;
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 5px;
    margin: 0 7px;
    vertical-align: middle;
    width: 5px;
  }

  .card__stats {
    display: flex;
    justify-content: center;

    color: #333;
  }

  .card__stat {
    line-height: 2;
    text-align: center;
    width: 70px;
    padding: 0.5em 0em;
  }

  .card__stat + .card__stat {
    border-left: 1px solid #66625c55;
  }

  .card__stat-name {
    font-size: 1.1rem;
  }

  .card__stat-value {
    font-size: 1.8rem;
    font-weight: 500;
  }

  button {
    background: linear-gradient(to bottom, #74CB4888, #74CB48);
    border: none;
    border-radius: 6px;
    color: #fff;
    font-family: inherit;
    font-weight: 500;
    font-size: 1.6rem;
    transition: opacity 100ms ease;

    :hover {
      cursor: pointer;
      opacity: .8;
    }

    :active {
      background: #74CB48;
      opacity: 1;
    }
  }
`;

export const Listing = styled.div`
  overflow-y: scroll;

  background: #fefefe;
  max-height: 500px;
  padding: 1em;

  /* hide scrollbar */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }


  .item {
    display: flex;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 8px;
    height: 96px;
    overflow: hidden;

    :hover {
      cursor: pointer;
    }

    :active {
      opacity: .8;
    }
  }

  .item + .item {
    margin-top: 1em;
  }

  .item__image {
    background: linear-gradient(to bottom, #74CB48, #FFF);
  }

  .item__info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex: 1;
    padding-left: 1em;
  }

  .item__name {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.5;
  }

  .item__id,
  .item__genus {
    color: #66625c;
    font-size: 1.3rem;
    margin-right: 1em;
  }

  .item__type {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .item__type--grass {
    color: #22c02a;
  }

  .item__type--poison {
    color: #a040a0;
  }

  .item__type + .item__type::before {
    background-color: #a39f99;
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 5px;
    margin: 0 7px;
    vertical-align: middle;
    width: 5px;
  }

  .item_stats {
    display: flex;
  }

  .item__stat {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    border-left: 1px solid #ccc;
    line-height: 2;
    text-align: center;
    width: 70px;
  }

  .item__stat-name {
    font-size: 1.1rem;
  }

  .item__stat-value {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;