import CameraShaker from "@rbxts/camera-shaker";
import { Players, ServerScriptService, ServerStorage, SoundService, Workspace } from "@rbxts/services";
import Path from "@rbxts/simplepath";
const model = new Instance("Model", Workspace);
const part = new Instance("Part", model);
const pos = new Vector3(26.5, 12.498, 13);
part.Position = new Vector3(35.5, 12.498, 52);
part.Anchored = false;
model.PrimaryPart = part;

// Players.PlayerAdded.Connect((player) => {
// 	player.CanLoadCharacterAppearance = false;
// });

const animation = new Instance("Animation");
animation.AnimationId = "rbxassetid://17613937034";
// CLAPPING 17613937034
// WALKING 17614104313
// HAND RAISE 17614111612
// HANDING PAPER 17614128188
// const track = Workspace.Rig.Humanoid.Animator.LoadAnimation(animation);
// print(track);
// track.Play();
