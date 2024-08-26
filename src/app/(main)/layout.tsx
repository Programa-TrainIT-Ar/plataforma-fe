import { AppLayoutProps } from "@/types/layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";

export default function AppLayout({ children }: AppLayoutProps) {
  const itemsMenu = ['Home', 'About us', 'Contact'];

  return (
    <>
      <div className="layout-topbar">
        <Link href="/" >
          <Image src={`/layout/images/logo.png`}
            width={60} height={45} alt="TrainIT" />
        </Link>
        <div className="topbar-menu-home">
          {
            itemsMenu.map((item) => {
              return (
                <Link key={item} href={`/#${item}`} >
                  <Button link type="button" className="p-link" >
                    {item}
                  </Button>
                </Link>
              )
            })
          }
        </div>

        <Link href={'/dashboard'}>
          <Button label='EQUIPO' rounded color="info" />
        </Link>

        <button type="button"
          className="p-link layout-topbar-menu-button layout-topbar-button" >
          <i className="pi pi-ellipsis-v" />
        </button>

      </div>
      {children}
    </>
  );
};
