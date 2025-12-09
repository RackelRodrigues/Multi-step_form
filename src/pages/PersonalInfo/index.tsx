import Button from "../../components/button";
import * as Input from "../../components/input";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import "../../styles/global.scss";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { UserDTO } from "../../DTO/UserDTO";
import { TSignUpSchema, signUpSchema } from "../../lib/type";
import { formatPhone } from "../../lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

const PersonalInfo = () => {
  const { steps, setSteps, name, email, phone, setEmail, setName, setPhone } =
    useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  useEffect(() => {
    if (steps === 1) {
      reset({
        name,
        email,
        phone,
      });
    }
  }, [steps, name, email, phone, reset]);

  const onSubmit = (data: UserDTO) => {
    setEmail(data.email);
    setName(data.name);
    setPhone(data.phone);
    if (steps === 0) {
      setSteps(steps + 2);
    } else {
      setSteps(steps + 1);
    }
  };
  return (
    <div className={styles.containerMobile}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className="Title">Personal Info</h1>
          <p className="Subtitle">
            please provide your name,email address, and phone number.
          </p>
        </div>
        <form className={styles.info}>
          <div>
            <div className={styles.label}>
              <label className={styles.label}>Name</label>
              {errors.name && (
                <span className={styles.labelError}>{errors.name.message}</span>
              )}
            </div>

            <Input.Root>
              <Input.Field
                type="text"
                placeholder="e.g. Stephen King"
                isError={!!errors.name}
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name")}
              />
            </Input.Root>
          </div>
          <div>
            <div className={styles.label}>
              <label className={styles.label}>Email Address</label>
              {errors.email && (
                <span className={styles.labelError}>
                  {errors.email.message}
                </span>
              )}
            </div>
            <Input.Root>
              <Input.Field
                type="email"
                isError={!!errors.email}
                placeholder="e.g stephenking@loren.com"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email")}
              />
            </Input.Root>
          </div>
          <div>
            <div className={styles.label}>
              <label className={styles.label}>Phone Number</label>
              {errors.phone && (
                <span className={styles.labelError}>
                  {errors.phone.message}
                </span>
              )}
            </div>
            <Input.Root>
              <Input.Field
                isError={!!errors.phone}
                type="phone"
                placeholder="e.g. +1 234 567 890"
                aria-invalid={errors.phone ? "true" : "false"}
                {...register("phone", {
                  onChange: (e) => {
                    const formatted = formatPhone(e.target.value);
                    e.target.value = formatted;
                  },
                })}
              />
            </Input.Root>
          </div>
        </form>
        <div className={styles.containerButton}>
          <Button
            type="submit"
            onClick={() => handleSubmit(onSubmit)()}
            className="secondary"
          >
            Next step
          </Button>
        </div>
      </div>
      <div className={styles.containerButtonMobile}>
        <Button
          type="submit"
          onClick={() => handleSubmit(onSubmit)()}
          className="secondary"
        >
          Next step
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
