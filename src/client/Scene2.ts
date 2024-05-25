import { Workspace, ReplicatedStorage } from "@rbxts/services";
import { lockCamera, moveCamera } from "./camera";
export async function scene2() {
	ReplicatedStorage.winter.Parent = Workspace;
	lockCamera(Workspace.winter.camera[1].CFrame);
	task.wait(2);
	moveCamera(Workspace.winter.camera[2].CFrame, 20);
	task.wait(2);
}
