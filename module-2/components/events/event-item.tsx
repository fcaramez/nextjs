import Image from "next/image";
import React from "react";
import { Event } from "../../types/dummy-data.types";
import styled from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({ item }: { item: Event }) => {
  const formatDate = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatAddress = item.location.replace(", ", "\n");

  const exploreLink = `/events/${item.id}`;

  return (
    <li className={styled.item}>
      <Image
        priority
        src={"/" + item.image}
        width={340}
        height={160}
        alt={item.title}
      />
      <div className={styled.content}>
        <div className={styled.summary}>
          <h2>{item.title}</h2>
          <div className={styled.date}>
            <DateIcon />
            <time>{formatDate}</time>
          </div>
          <div className={styled.address}>
            <AddressIcon />
            <address>{formatAddress}</address>
          </div>
        </div>
        <div className={styled.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styled.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
