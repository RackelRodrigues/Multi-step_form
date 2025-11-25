import Button from "../../components/button";
import * as Input from "../../components/input";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import "../../styles/global.scss";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/globalContext";

const PersonalInfo = () => {
  const { steps, setSteps, name, email, phone, setEmail, setName, setPhone } =
    useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
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

  const onSubmit = (data: any) => {
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
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className="Title">Personal Info</h1>
        <p className="Subtitle">
          please provide your name,email address, and phine number.
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
              placeholder="name"
              isError={!!errors.name}
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", { required: "This field is required" })}
            />
          </Input.Root>
        </div>
        <div>
          <div className={styles.label}>
            <label className={styles.label}>Email Address</label>
            {errors.email && (
              <span className={styles.labelError}>{errors.email.message}</span>
            )}
          </div>
          <Input.Root>
            <Input.Field
              type="email"
              isError={!!errors.email}
              placeholder=""
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", { required: "This field is required" })}
            />
          </Input.Root>
        </div>
        <div>
          <div className={styles.label}>
            <label className={styles.label}>Phone Number</label>
            {errors.phone && (
              <span className={styles.labelError}>{errors.phone.message}</span>
            )}
          </div>
          <Input.Root>
            <Input.Field
              isError={!!errors.phone}
              type="phone"
              placeholder="e.g. +1 234 567 890"
              aria-invalid={errors.phone ? "true" : "false"}
              {...register("phone", { required: "This field is required" })}
            />
          </Input.Root>
          `
        </div>
      </form>
      <div className={styles.Button}>
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
