type User = {
  name: string;
  email: string;
};

const getAll = async (): Promise<User[]> => {
  try {
    const result = await [
      {
        name: "",
        email: "",
      },
    ];

    return result;
  } catch (error) {
    throw error;
  }
};

const store = async (data: User): Promise<boolean> => {
  try {
    const result = await true; //insert data ke db
    return result;
  } catch (error) {
    throw error;
  }
};

export { getAll, store };

interface IUser {
  getAll(): Promise<User[]>;
  getDetail(): Promise<user>;
  store(user: User): Promise<Boolean>;
}

class UserModel implements IUser {
  getAll(): Promise<User[]> {}
  getDetail(): Promise<user> {}
  store(user: User): Promise<Boolean> {}
  destroy() {}
}
