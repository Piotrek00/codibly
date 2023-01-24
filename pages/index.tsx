import Head from "next/head";
import styles from "../styles/Home.module.css";
import ColorTable from "../src/component/ColorTable";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Input } from "@chakra-ui/react";

interface IProductsApiResult {
  total_pages: number;
}

export default function Home() {
  const router = useRouter();

  const [data, setData] = useState<IProductsApiResult | null>(null);
  const [page, setPage] = useState<number>(Number(router.query.page) ?? 1);
  const [id, setId] = useState("");
  const [err, setErr] = useState(null);

  const handleNumber = (event: { target: { value: string } }) => {
    const colorId = event.target.value.replace(/\D/g, "");

    setId(colorId);
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const fetchData = async () => {
      const result = await fetch(
        "https://reqres.in/api/products?" +
          new URLSearchParams({
            page: String(page),
            per_page: "5",
            id: id,
          })
      )
        .then((response) => {
          setData(null);
          if (!response.ok) {
            throw Error("Could not fetch the data...");
          }
          return response.json();
        })
        .then((data) => {
          setErr(null);
          setData(data);
        })
        .catch((err) => {
          setErr(err.message);
        });
    };

    fetchData();
  }, [page, id, router.isReady]);
  if (data === null) {
    throw new Error("DATA IS EMPTY");
  }
  const totalPages: number = data.total_pages;
  console.log(err);

  return (
    <>
      <Head>
        <title>Codibly Intern</title>
        <meta name="description" content="Made by Piotrek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div>
          <Input
            mb="20px"
            type="text"
            placeholder="ID"
            value={id}
            onChange={handleNumber}
          />

          {data && <ColorTable kolory={data} />}
          {err && <div>{err}</div>}
          <div className={styles.center}>
            <Button
              m="10px"
              boxShadow="md"
              isDisabled={page == 1}
              onClick={() => {
                setPage(page !== 1 ? page - 1 : page);
              }}
            >
              BACK
            </Button>
            <Button
              m="10px"
              boxShadow="md"
              isDisabled={page == totalPages}
              onClick={() => {
                setPage(page !== totalPages ? page + 1 : page);
              }}
            >
              NEXT
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
