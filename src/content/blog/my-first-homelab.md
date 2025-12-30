---
title: "Building My Homelab"
excerpt: "How I fixed terrible Wi‑Fi in an old house, built a custom router, and started self‑hosting with Proxmox."
publishDate: "2025-12-30"
tags: ["homelab", "networking", "opnsense", "proxmox", "self-hosting", "wifi"]
draft: true
---

# Building My Homelab

This homelab started for a very simple reason: I moved into an old house and the Wi‑Fi was unusable. The ISP‑provided router only reached the room where the internet entered the property — everywhere else was a dead zone. That problem pushed me down the rabbit hole of mesh Wi‑Fi, custom routing, network segmentation, and eventually a full self‑hosting setup.

What began as “I just want internet in my bedroom” has turned into a proper homelab that I’m still expanding.

---

## Goals

- **Reliable coverage** across the whole house
- **Low latency** for gaming
- **More control** over firewalling and routing than an ISP router
- **A path to self-hosting** without immediately exposing everything to the internet

## Fixing the Wi‑Fi Problem

The first upgrade was Wi‑Fi. I bought **three Deco mesh access points**, placed them around the house, and immediately got reliable coverage everywhere. One Deco is wired into the network and the others connect over the mesh, which is perfect for an older building where running Ethernet isn’t an option.

But once the Wi‑Fi was sorted, I wanted more control over the network itself — firewall rules, better security, proper traffic shaping, and a clean separation between LAN, WAN, and IoT devices.

So that’s when I bought the router.

---

## Replacing the ISP Router With a Custom One

I picked up an **N100 Topton mini‑PC** (8GB RAM, 128GB NVMe, DDR5, 4x 2.5G NICs) from AliExpress. It arrived with pfSense preinstalled, but I wanted **OPNsense**, so the first step was wiping it and installing my own setup.

Once OPNsense was running, I configured:

- **Static IPs** for the Deco APs and my desktop
- **GeoIP blocking** for extra security
- **Ad‑blocking** at the network level
- **Bufferbloat and latency tuning** (I’m a big gamer, so this mattered to me)
- **Separate interfaces** for WAN, LAN, and an IoT network

The Deco units were switched into **Access Point mode**, letting OPNsense handle all routing and firewall logic. This setup has been rock‑solid — and noticeably better for gaming than the ISP router ever was.

---

## Expanding Into Self‑Hosting

Once the network was stable, I wanted to start self‑hosting. I picked up a **13th‑gen Intel NUC** (i5‑1340P, 32GB RAM), which became the heart of the homelab.

I installed **Proxmox** and began building out virtual machines.

### Pelican Panel + Wings

Pelican gives me a clean UI for managing game servers (similar to Pterodactyl). I run two VMs for it:

- **Panel VM** — LAN‑only, accessible from my desktop
- **Wings VM** — exposed through port forwarding so game servers can accept inbound connections

Both have static IPs assigned through OPNsense.

For exposure, I use direct **OPNsense port forwards** and only open the specific TCP/UDP ports needed for each server. Right now I’m connecting via IP (no dynamic DNS yet).

### Game Servers

Right now I’m hosting:

- A **modded Fabric Minecraft server**
- An **SCP: Secret Laboratory** server

The NUC handles both effortlessly. I even hosted a game night with around 14 people on SCP:SL — zero lag, zero issues.

---

## Network Segmentation

Because I plan to add smart home devices later (like a video doorbell), I designed the network with segmentation from the start:

- **WAN** — dedicated physical port to the ISP modem/ONT
- **LAN** — trusted devices (desktop + Deco APs)
- **IoT_LAN** — separate physical port for homelab / “less trusted” devices (my NUC lives here)

This keeps untrusted IoT hardware away from the rest of the network and makes firewall rules much cleaner.

Right now, my Decos can create separate guest/IoT Wi‑Fi networks in the app, but those SSIDs still come in through the same physical LAN connection. My original plan was to land IoT on its own router interface/NIC, so the next step is figuring out how I want to bridge “multiple SSIDs” to “multiple network segments” cleanly.

---

## Lessons Learned

- **Fix the boring stuff first**: good Wi‑Fi coverage made everything else worth doing.
- **Segmentation doesn’t have to be complicated**: even splitting networks by physical interfaces makes a big difference.
- **Self-hosting feels safer with structure**: having a firewall/router I control made it much easier to experiment.

---

## What’s Next

There’s still plenty I want to add:

- More self‑hosted apps
- A proper monitoring stack (Prometheus + Grafana)
- Smart home equipment
- Automated backups for Proxmox
- Maybe a second NUC for high‑availability

But for now, the homelab does exactly what I need: fast Wi‑Fi, a secure network, and a powerful little self‑hosting setup that keeps growing with me.
