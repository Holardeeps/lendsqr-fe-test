"use client";

import { useUserStore } from "@/store/userStore";
import styles from "./UserDetails.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getFullName, shorten } from "@/lib/utils";

type UserDetailsProps = {
  id: string;
};

const UserDetails = ({ id }: UserDetailsProps) => {
  const getUser = useUserStore((state) => state.getUserById);
  const user = getUser(id);

  if (!user) return null;

  return (
    <main className={styles.container}>
      <Link href={"/users"} className={styles.back}>
        <img src="/icons/back.png" alt="arrow back" />
        <h3>Back to Users</h3>
      </Link>
      <div className={styles.heading}>
        <h2>User Details</h2>
        <div className={styles.actions}>
          <button className={styles.danger}>blacklist user</button>
          <button className={styles.active}>activate user</button>
        </div>
      </div>

      {/* Top user detail section */}
      <section className={styles.topBox}>
        <div className={styles.user}>
          <div className={styles.left}>
            <div className="">
              <div className={styles.image}>
                {/* Cant use populated images because mockapi.io returns different avatars from different urls. Cant control the source  */}
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    width={100}
                    height={100}
                    alt="user avatar"
                  />
                ) : (
                  <img src="/icons/user.png" alt="" />
                )}
              </div>
            </div>
            <div className={styles.name}>
              <h2>{getFullName(user.name)}</h2>
              <p>{shorten(user.lendsqr_id)}</p>
            </div>
          </div>
          <div className={styles.center}>
            <p>User's Tier</p>
            <span>
              <img src="/icons/star-fill.png" alt="star alt" />
              <img src="/icons/star-fill.png" alt="star alt" />
              <img src="/icons/star.png" alt="star" />
            </span>
          </div>
          <div className={styles.right}>
            <h2>₦{user.lendsqr_balance}</h2>
            <span>
              {user.bank_number}/{user.bank}
            </span>
          </div>
        </div>
        <div className={styles.nav}>
          <h2>General Details</h2>
          <h2>Documents</h2>
          <h2>Bank Details</h2>
          <h2>Loans</h2>
          <h2>Savings</h2>
          <h2>App and System</h2>
        </div>
      </section>

      <section className={styles.general}>
        <div className={styles.details}>
          <h2>Personal Information</h2>
          <div className={styles.data}>
            <div className="">
              <p>full name</p>
              <h2>{user.name}</h2>
            </div>
            <div className="">
              <p>phone number</p>
              <h2>{user.phone}</h2>
            </div>
            <div className="">
              <p>email address</p>
              <h2>{user.email}</h2>
            </div>
            <div className="">
              <p>bvn</p>
              <h2>{user.bvn}</h2>
            </div>
            <div className="">
              <p>gender</p>
              <h2>{user.gender}</h2>
            </div>
            <div className="">
              <p>marital status</p>
              <h2>{user.marital_status}</h2>
            </div>
            <div className="">
              <p>children</p>
              <h2>{user.children}</h2>
            </div>
            <div className="">
              <p>type of residence</p>
              <h2>{user.residence}</h2>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <h2>Education and Employment</h2>
          <div className={styles.data}>
            <div className="">
              <p>level of education</p>
              <h2>{user.education}</h2>
            </div>
            <div className="">
              <p>employment status</p>
              <h2>{user.employment ? "Employed" : "Self-Employed"}</h2>
            </div>
            <div className="">
              <p>sector of employment</p>
              <h2>{user.work_sector}</h2>
            </div>
            <div className="">
              <p>duration of employment</p>
              <h2>{user.work_duration}</h2>
            </div>
            <div className="">
              <p>office email</p>
              <h2>{user.email}</h2>
            </div>
            <div className="">
              <p>monthly income</p>
              <h2>{user.income}</h2>
            </div>
            <div className="">
              <p>loan repayment</p>
              <h2>{user.loan_repayment}</h2>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <h2>Socials</h2>
          <div className={styles.data}>
            <div className="">
              <p>twitter</p>
              <h2>{user.twitter}</h2>
            </div>
            <div className="">
              <p>facebook</p>
              <h2>{user.facebook}</h2>
            </div>
            <div className="">
              <p>instagram</p>
              <h2>{user.instagram}</h2>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <h2>Guarantor</h2>
          <div className={styles.data}>
            <div className="">
              <p>full name</p>
              <h2>{user.guarantor}</h2>
            </div>
            <div className="">
              <p>phone number</p>
              <h2>{user.guarantor_phone}</h2>
            </div>
            <div className="">
              <p>email address</p>
              <h2>{user.guarantor_email}</h2>
            </div>
            <div className="">
              <p>relationship</p>
              <h2>{user.guarantor_relationship}</h2>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <h2></h2>
          <div className={styles.data}>
            <div className="">
              <p>full name</p>
              <h2>{user.guarantor2}</h2>
            </div>
            <div className="">
              <p>phone number</p>
              <h2>{user.guarantor2_phone}</h2>
            </div>
            <div className="">
              <p>email address</p>
              <h2>{user.guarantor2_email}</h2>
            </div>
            <div className="">
              <p>relationship</p>
              <h2>{user.guarantor2_relationship}</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserDetails;
