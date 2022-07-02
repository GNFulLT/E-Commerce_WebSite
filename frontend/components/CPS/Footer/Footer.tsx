import React from "react";
import styles from "./footer.module.scss";
import { BsCart4 } from "react-icons/bs";
import {
  BrandFacebook,
  BrandInstagram,
  BrandTwitter,
  BrandLinkedin,
  InfoCircle,
} from "tabler-icons-react";
import {
  TextInput,
  PasswordInput,
  Tooltip,
  Center,
  Button,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Footer = () => {
    
  const query = useMediaQuery("(min-width: 768px)",true);

  const rightSection = (
    <Tooltip
      label="We store your data securely"
      placement="end"
      withArrow
      transition="pop-bottom-right"
    >
      <Text color="dimmed" sx={{ cursor: "help" }}>
        <Center>
          <InfoCircle size={18} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["category-list"]}></div>
      <div className={styles["subscribe"]}>
        <div className={styles["icon-list"]}>
          <div className="medium-text" style={{ textAlign: "center" }}>
            Powered By <br></br>
            <span style={{ color: "blue" }}>GNF</span>
            <br></br>
          </div>
          <div>
            <div className="small-text">Supported Payment Systems</div>
            <ul>
              <li>
                <img className={styles["icon"]} src="/cards/visa.ico" alt="" />
              </li>
              <li>
                <img
                  className={styles["icon"]}
                  src="/cards/master.ico"
                  alt=""
                />
              </li>
              <li>
                <img
                  className={styles["icon"]}
                  src="/cards/paypal.ico"
                  alt=""
                />
              </li>
              <li>
                <img
                  className={styles["icon"]}
                  src="/cards/express.ico"
                  alt=""
                />
              </li>
              <li>
                <img
                  className={styles["icon"]}
                  src="/cards/discover.ico"
                  alt=""
                />
              </li>
              <li>
                <img
                  className={styles["icon"]}
                  src="/cards/amazon.ico"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["subscribe-right"]}>
          <div className="medium-text">
            {query
              ? "Subscribe to be the first to enjoy discounts and special events"
              : `Subscribe to be the first to enjoy discounts and special events`}
          </div>
          <div className={styles["text-button"]}>
            <TextInput
              styles={{
                wrapper: {
                  width: `${query ? "300px" : "100px"}`,
                  height: `${query ? "50px" : "30px"}`,
                },
                root: {
                  height: `${query ? "50px" : "30px"}`,
                },
                input: {
                  "::placeholder": {
                    fontSize: `${query ? "14px" : "10px"}`,
                  },
                  fontSize: `${query ? "14px" : "10px"}`,
                  height: `${query ? "50px" : "30px"}`,
                  minHeight: `${query ? "50px" : "30px"}`,
                },
              }}
              size="sm"
              rightSection={rightSection}
              placeholder="Your email"
            />
            <Button
              styles={{
                root: {
                  width: `${query ? "100px" : "50px"}`,
                  height: `${query ? "40px" : "20px"}`,
                  borderRadius: "999px",
                  backgroundColor: "rgba(242, 121, 53)",
                  transition: "all 0.2s",
                  ":hover": {
                    backgroundColor: "RGB(212, 94, 96)",
                    transition: "all 0.4s",
                  },
                },
                label: {
                  fontSize: `${query ? "14px" : "7px"}`,
                  padding: "0 31px 0 0",
                },
              }}
              variant="filled"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className={styles["follow-privacy"]}>
        <div className={styles["left-icon-wrapper"]}>
          <BsCart4 className={styles["left-icon"]}></BsCart4>
        </div>
        <div className={`medium-text + ${styles["privacy-text"]}`}>
          © 2017 All Right Reserverd Terms of Use <br></br> and Privacy Policy
        </div>
        <div className={styles["icon-list"]}>
          <ul>
            <li>
              <BrandFacebook className={styles["icon"]}></BrandFacebook>
            </li>
            <li>
              <BrandInstagram className={styles["icon"]}></BrandInstagram>
            </li>
            <li>
              <BrandTwitter className={styles["icon"]}></BrandTwitter>
            </li>
            <li>
              <BrandLinkedin className={styles["icon"]}></BrandLinkedin>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
