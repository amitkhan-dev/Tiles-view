import React from "react";
import tilesData from "@/data/tiles.json";
import TileDetails from "./TileDetails";

const getTileById = async (id) => {
  const foundTile = tilesData.find((item) => String(item.id) === String(id));
  return foundTile || null;
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const tile = await getTileById(resolvedParams.id);

  if (!tile) {
    return {
      title: "Product Not Found | Clay & Crown",
      description: "The requested tile product could not be found.",
    };
  }

  return {
    title: `${tile.title || tile.name} | Clay & Crown`,
    description: tile.description || tile.details || "Explore luxury tile collections.",
    openGraph: {
      title: tile.title || tile.name,
      description: tile.description || tile.details,
      images: [{ url: tile.image }],
    },
  };
}

export default async function SingleProductPage({ params }) {
  const resolvedParams = await params;
  const tile = await getTileById(resolvedParams.id);

  return <TileDetails tile={tile} allTiles={tilesData} />;
}