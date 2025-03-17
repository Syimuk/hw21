import { BASE_URL, GUN_ACTION_TYPES } from "../constants";

const getGunById = (data) => {
  return { type: GUN_ACTION_TYPES.GET_BY_ID, payload: data };
};

export const createGun = () => {
  return { type: GUN_ACTION_TYPES.CREATE_GUN };
};

export const loadingGun = (boo) => {
  return { type: GUN_ACTION_TYPES.IS_PENDING, payload: boo };
};

export const errorHandler = (error) => {
  return { type: GUN_ACTION_TYPES.ERROR, payload: error };
};
export const gcreateGun = () => {
  return { type: GUN_ACTION_TYPES.CREATE_GUN };
};
export const getGunData = (data) => {
  return { type: GUN_ACTION_TYPES.GET_GUN, payload: data };
};

export const createGunThunk = (data) => {
  return async (dispatch) => {
    dispatch(loadingGun(true));
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "Application/json",
        },
      });
      if (!response.ok) {
        throw new Error(response);
      }
      dispatch(loadingGun(false));
    } catch (error) {
      dispatch(errorHandler(error));
      dispatch(loadingGun(false));
    }
  };
};

export const getGunsThunk = (data) => {
  return async (dispatch) => {
    dispatch(loadingGun(true));
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response);
      }
      dispatch(getGunData(data));
    } catch (error) {
      dispatch(errorHandler(error));
      dispatch(loadingGun(false));
    }
  };
};

export const getGunByIdThunk = (id) => {
  return async (dispatch) => {
    dispatch(loadingGun(true));
    try {
      const response = await fetch(BASE_URL + `/${id}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response);
      }
      dispatch(getGunById(data));
    } catch (error) {
      dispatch(errorHandler(error));
      dispatch(loadingGun(false));
    }
  };
};

export const updateGunThunk = (id, data) => {
  return async (dispatch) => {
    dispatch(loadingGun(true));
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to update gun");
      }
      const updatedData = await response.json();

      dispatch(getGunById(updatedData)); 
      dispatch(getGunsThunk()); 
      dispatch(loadingGun(false));
    } catch (error) {
      dispatch(errorHandler(error));
      dispatch(loadingGun(false));
    }
  };
};


