import CameraShaker from "@rbxts/camera-shaker";
import { Players, SoundService, Workspace } from "@rbxts/services";
import { lockCamera, unlockCamera, moveCamera } from "./camera";
import { scene1 } from "./Scene1";
import { scene2 } from "./Scene2";

scene1().andThen(() => {});
